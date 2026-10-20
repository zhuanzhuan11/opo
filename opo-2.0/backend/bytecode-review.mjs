// Observations only. A dispatch opcode's presence does not prove reachability.
export function reviewBytecode(hex){
 if(typeof hex!=='string'||!/^0x(?:[a-f0-9]{2})*$/i.test(hex))throw Error('INVALID_BYTECODE');
 const bytes=Buffer.from(hex.slice(2),'hex'),instructions=[];
 for(let pc=0;pc<bytes.length;pc++){const opcode=bytes[pc];instructions.push({pc,opcode});if(opcode>=0x60&&opcode<=0x7f)pc+=opcode-0x5f}
 const positions=opcode=>instructions.filter(i=>i.opcode===opcode).map(i=>i.pc);
 return {delegatecall:positions(0xf4),callcode:positions(0xf2),selfdestruct:positions(0xff),externalCall:positions(0xf1),staticCall:positions(0xfa),interpretation:'Absence of DELEGATECALL/CALLCODE is evidence against conventional proxy upgrades, not a complete audit of external dependencies or privileged behavior'};
}

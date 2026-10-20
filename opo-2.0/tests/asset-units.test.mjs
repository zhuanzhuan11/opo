import test from 'node:test';
import assert from 'node:assert/strict';
import {parseUnits,convertUnitsExact,ledgerInteger} from '../backend/asset-units.mjs';
test('18-decimal token amounts do not get mistaken for six-decimal ledger values',()=>{const atoms=parseUnits('100.123456',18);assert.equal(atoms,100123456000000000000n);assert.equal(ledgerInteger(convertUnitsExact(atoms,18,6)),100123456);assert.equal(convertUnitsExact(100123456n,6,18),atoms)});
test('precision loss, unsafe integers and malformed token amounts are refused',()=>{assert.throws(()=>convertUnitsExact(1n,18,6),/PRECISION_LOSS/);assert.throws(()=>ledgerInteger(2n**80n),/RANGE/);for(const value of ['1e18','-1','1.0000001','NaN'])assert.throws(()=>parseUnits(value,6));assert.throws(()=>parseUnits('1',-1));assert.throws(()=>convertUnitsExact(1n,18,255))});

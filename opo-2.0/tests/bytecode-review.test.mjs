import test from 'node:test';
import assert from 'node:assert/strict';
import {reviewBytecode} from '../backend/bytecode-review.mjs';
test('bytecode review does not mistake PUSH data for executable delegation opcodes',()=>{assert.deepEqual(reviewBytecode('0x60f460f2').delegatecall,[]);assert.deepEqual(reviewBytecode('0x60fff4').delegatecall,[2]);assert.deepEqual(reviewBytecode('0x60fff4').selfdestruct,[]);assert.throws(()=>reviewBytecode('0xzz'),/INVALID_BYTECODE/)});

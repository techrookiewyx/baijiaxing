import { name, py, pinxie } from '../core/src';

it('=> name.length', () => expect(name.length).toBe(568));
it('=> pinxie.length', () => expect(pinxie.length).toBe(568));
it('=> py.length', () => expect(py.length).toBe(568));
it('=> name[3]', () => expect(name[3]).toBe('李'));
it('=> py[2]', () => expect(py[2]).toBe('sūn'));
it('=> pinxie[1]', () => expect(pinxie[1]).toBe('qian'));
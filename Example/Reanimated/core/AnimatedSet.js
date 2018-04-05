import AnimatedNode from './AnimatedNode';
import { val } from '../utils';

export default class AnimatedSet extends AnimatedNode {
  _what;
  _value;

  constructor(what, value) {
    super({ type: 'set', what }, [value]);
    this._what = what;
    this._value = value;
  }

  __onEvaluate() {
    const newValue = val(this._value);
    this._what._updateValue(newValue);
    return newValue;
  }
}

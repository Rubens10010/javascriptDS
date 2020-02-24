/* Stacks */

// functions: push, pop, peek, length

class Stack<T>{
	private  _storage: T[];
	public _size: number;

	public constructor(){
		this._size = 0;
		this._storage = [];
	}

	// Adds a value onto the end of the stack
	public push(value: T){
		this._storage[this._size] = value;
		this._size++;
	}

	// Removes and returns the value at the end of the stack
	public pop() : T {
		if(this._size === 0){
			return undefined;
		}
		this._size--;
		let result: T = this._storage[this._size];
		delete this._storage[this._size];
		return result;
	}

	// Returns the value at top of stack
	public peek() : T {
		return this._storage[this._size-1];
	}

	// Returns size of stack
	public length(): number {
		return this._size;
	}

	public print() {
		let stackTrace: string = "";
		for(var i = 0; i < this._size; i++){
			stackTrace += this._storage[i] + " ";
		}
		stackTrace = stackTrace.trim();
		stackTrace = "(T)" + stackTrace + "(H)";
		console.log(stackTrace);
	}
}

export {Stack}
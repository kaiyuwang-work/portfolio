function LinkedList(){
	function Node(element){
		this.element = element
		this.next = null
	}
	
	this.length = 0
	this.head = null
}

LinkedList.prototype.append = function(element){
	var newNode = new Node(element)
	
	
	if(this.head === null){
		this.head = newNode
	}else{
		var current = this.head
		while(current.next){
			current = current.next
		}current.next = newNode
	}
	this.length++
}
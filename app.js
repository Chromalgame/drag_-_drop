const base = document.querySelector('.base');
const boxs = document.querySelectorAll('.case');

base.addEventListener('dragstart', dragStart);
base.addEventListener('dragend', dragEnd);

function dragStart(){
    this.className += ' tenu';

    setTimeout(() => (this.className = 'invisble'), 0);
}

function dragEnd(){
    this.className = 'base';
}

boxs.forEach((box) =>{
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
});

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    
    this.className = 'case';
}

function dragDrop(){
    this.className = 'case';
    this.append(base);
}
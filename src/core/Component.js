export default class Component {
    $target;
    props;
    state;
    

    constructor($target, props) {
        this.$target = $target;
        this.props= props
        this.setup();
        this.setEvent();
        this.render();
        
        
    }
    // state초기화 
    setup() {
        
    }

    mounted(){}

    template() {
        return '';
    }

    render() {
        // innerHTML은 기존 노드는 삭제되면서 새로 리턴된다. 
        // insertAdjacentHTML 이걸 썼더니 한개의 노드가 복사되고 원하는 컴포넌트가 두개 생기진 않음
        this.$target.innerHTML = this.template();
        this.mounted();
        
    }
    setEvent() {}

    setState(newState){
        this.state = {...this.state, ...newState}
        this.render();
    }

    addEvent(eventType, selector, callback){
        const children = [...this.$target.querySelectorAll(selector)];
        this.$target.addEventListener(eventType, e=>{
            if ( !e.target.closest(selector) ) return false;
            callback(e)
        })
    }
}
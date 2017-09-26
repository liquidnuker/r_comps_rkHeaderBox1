export default class RkHeaderBox101 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property1: ""
    };

    // 
    // this.method1 = this.method1.bind(this);
  }

  // lifecycle hooks
  
  // methods
  method1() {
    this.setState(prevState => ({
      // property1: store.state
    }));
  }

  render() {
    return (
      <header className="row rkheaderbox101">
        <h2 tabindex="0">ZZZZ</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</p>
        <hr />
      </header>
    );
  }
}
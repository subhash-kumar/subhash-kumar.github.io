
function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //URL = "https://api.spacexdata.com/v3/launches?limit=10"; // URL variable stores JSON url || API taken from 10 Degrees WordPress Agency
URL = "https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=true";

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      post: [],
      allPosts: [] });_defineProperty(this, "_onKeyUp",



















    e => {
      // filter post list by title using onKeyUp function
      const post = this.state.allPosts.filter((item) =>
      item.mission_name.toLowerCase().includes(e.target.value.toLowerCase()));

      this.setState({ post });
    });_defineProperty(this, "_filterByYear",

    year => {
      const post = this.state.allPosts.filter((item) =>
      item.launch_year === year);

      this.setState({ post });
    });_defineProperty(this, "_filterByLaunch",
    launch => {
      const post = this.state.allPosts.filter((item) =>
      item.launch_success === launch);

      this.setState({ post });
    });_defineProperty(this, "_filterByLanding",
    landing => {
      const post = this.state.allPosts.filter((item) =>
      item.launch_landing === landing);

      this.setState({ post });
    });}componentDidMount() {axios.get(URL, { headers: { Accept: "application/json", "Content-Type": "application/json" } }).then(({ data }) => {this.setState({ post: data, allPosts: data // array data from JSON stored in these
      });}).catch(err => {});}


  render() {
    return (

      React.createElement("div", { className: "container-fluid" },
      React.createElement("header", null,
      React.createElement("h2", null, "")),

      React.createElement("section", null,
      React.createElement("nav", null,



      React.createElement("ul", null,
      React.createElement("h1", null, "Filters"),
      React.createElement("p", null, "Launch Year"),
      React.createElement("div", { class: "w3-show-inline-block" },
      React.createElement("div", { class: "w3-bar" },
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2006') }, "2006"),
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2007') }, "2007"))),



      React.createElement("div", { class: "w3-show-inline-block" },
      React.createElement("div", { class: "w3-bar" },
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2008') }, "2008"),
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2009') }, "2009"))),



      React.createElement("div", { class: "w3-show-inline-block" },
      React.createElement("div", { class: "w3-bar" },
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2010') }, "2010"),
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2011') }, "2011"))),



      React.createElement("div", { class: "w3-show-inline-block" },
      React.createElement("div", { class: "w3-bar" },
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2012') }, "2012"),
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2013') }, "2013"))),



      React.createElement("div", { class: "w3-show-inline-block" },
      React.createElement("div", { class: "w3-bar" },
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2014') }, "2014"),
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2015') }, "2015"))),



      React.createElement("div", { class: "w3-show-inline-block" },
      React.createElement("div", { class: "w3-bar" },
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2016') }, "2016"),
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2017') }, "2017"))),



      React.createElement("div", { class: "w3-show-inline-block" },
      React.createElement("div", { class: "w3-bar" },
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2018') }, "2018"),
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2019') }, "2019"))),



      React.createElement("div", { class: "w3-show-inline-block" },
      React.createElement("div", { class: "w3-bar" },
      React.createElement("button", { class: "w3-btn w3-teal", onClick: () => this._filterByYear('2020') }, "2020"))),




      React.createElement("br", null),
      React.createElement("p", null, "Successful Launch"),

      React.createElement("div", { class: "w3-show-inline-block" },
      React.createElement("div", { class: "w3-bar" },
      React.createElement("button", { class: "btn btn-success", onClick: () => this._filterByLaunch(true) }, "true"),
      React.createElement("button", { class: "btn btn-success", onClick: () => this._filterByLaunch(false) }, "false"))),



      React.createElement("br", null),
      React.createElement("p", null, "Successful Landing"),

      React.createElement("div", { class: "w3-show-inline-block" },
      React.createElement("div", { class: "w3-bar" },
      React.createElement("button", { class: "btn btn-success", onClick: () => this._filterByLanding(true) }, "true"),
      React.createElement("button", { class: "btn btn-success", onClick: () => this._filterByLanding(false) }, "false"))))),






      React.createElement("article", null,
      React.createElement("ul", { className: "data-list" },

      this.state.post.map((item, index) =>
      React.createElement("li", { className: "block-" + index },
      React.createElement("div", { className: "title" },
      React.createElement("img", { src: item.links.mission_patch_small }),
      React.createElement("h3", null, item.mission_name),
      React.createElement("h5", null, "Mission Ids: ", item.mission_id.length === 0 ? "0" : item.mission_id.map((id, index) => React.createElement("span", { key: index }, (index ? ', ' : '') + id))),
      React.createElement("h5", null, "Launch Year: ", item.launch_year),
      React.createElement("h5", null, "Successful Launch: ", item.launch_success ? "True" : "False"),
      React.createElement("h5", null, "Successful Landing: ", item.launch_landing ? "True" : "False")))))))));












  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
//# sourceURL=pen.js
  
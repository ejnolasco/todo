// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>

function monday() {
 let lunes=(
      <div className="start">
      <audio id="sound"></audio>
    <div>
    <audio autoPlay>
      <source src="audio/mon.mp3"></source>
    </audio>
      <div className="monday-div">Monday</div>
      <div className="arrows-div">
   <img className="arrowtotheleft" alt=""  onClick={tuesday} src="img/arrowtotheright.png"/>  
     <img className="arrowtotheright" alt="" onClick={sunday} src="img/arrowtotheleft.png"/>
     </div>
      </div>
      <input type="text" placeholder="What's on Your mind?" className="monday-input" id="task-field" />
          <button className="monday-button-add" onClick={saveTask}>ADD</button>
          <ul className="myul" id="myul">
          </ul>
    </div>
  );
  ReactDOM.render(lunes,document.getElementById("page-content"));
};
function tuesday() {
 let martes=(
      <div className="start">
    <div>
    <audio autoPlay>
      <source src="audio/tue.mp3"></source>
    </audio>
      <div className="monday-div">Tuesday</div>
   <img className="arrowtotheleft" alt="" onClick={wednesday} src="img/arrowtotheright.png"/>
     <img className="arrowtotheright" alt="" onClick={monday} src="img/arrowtotheleft.png"/>
      </div>
      <input type="text" placeholder="What's on Your mind?" className="monday-input" id="task-field"/>
          <button className="monday-button-add" onClick={saveTask}>ADD</button>
          <ul className="myul" id="myul">
          </ul>
    </div>
  );
  ReactDOM.render(martes,document.getElementById("page-content"));
};

function wednesday() {
let myerkules=(
      <div className="start">
    <div>
    <audio autoPlay src="audio/wed.mp3">
      <source src="tue.mp3"></source>
    </audio>
      <div className="monday-div">Wednesday</div>
   <img className="arrowtotheleft" onClick={thursday} alt="" src="img/arrowtotheright.png"/>
      
     <img className="arrowtotheright" alt="" onClick={tuesday} src="img/arrowtotheleft.png"/>
      </div>
      <input type="text" placeholder="What's on Your mind?" className="monday-input" id="task-field" />
          <button className="monday-button-add" onClick={saveTask}>ADD</button>
          <ul className="myul" id="myul">
          </ul>
    </div>
  );
  ReactDOM.render(myerkules,document.getElementById("page-content"));
};
  function thursday() {
 let huwebes=(
      <div className="start">
    <div>
    <audio autoPlay src="audio/thu.mp3">
      <source src="thu.mp3"></source>
    </audio>
      <div className="monday-div">Thursday</div>
   <img className="arrowtotheleft" alt="" onClick={friday} src="img/arrowtotheright.png"/>
     <img className="arrowtotheright" alt="" onClick={wednesday} src="img/arrowtotheleft.png"/>
      </div>
      <input type="text" placeholder="What's on Your mind?" className="monday-input" id="task-field" />
          <button className="monday-button-add" onClick={saveTask}>ADD</button>
          <ul className="myul" id="myul">
          </ul>
    </div>
  );
  ReactDOM.render(huwebes,document.getElementById("page-content"));
};
function friday() {
 let biyernes=(
      <div className="start">
    <div>
    <audio autoPlay src="audio/fri.mp3">
      <source src="fri.mp3"></source>
    </audio>
      <div className="monday-div">Friday</div>
   <img className="arrowtotheleft"onClick={saturday} alt="" src="img/arrowtotheright.png"/>
      <img className="arrowtotheright" alt="" onClick={thursday} src="img/arrowtotheleft.png"/>
      </div>
      <input type="text" placeholder="What's on Your mind?" className="monday-input" id="task-field" />
          <button className="monday-button-add" onClick={saveTask}>ADD</button>
          <ul className="myul" id="myul">
          </ul>
    </div>
  );
  ReactDOM.render(biyernes,document.getElementById("page-content"));
};
function saturday() {
 let sabado=(
      <div className="start">
    <div>
    <audio autoPlay src="audio/sat.mp3">
      <source src="sat.mp3"></source>
    </audio>
      <div className="monday-div">Saturday</div>
   <img className="arrowtotheleft"onClick={sunday} alt="" src="img/arrowtotheright.png"/>
     <img className="arrowtotheright" alt="" onClick={friday} src="img/arrowtotheleft.png"/>
      </div>
      <input type="text" placeholder="What's on Your mind?" className="monday-input" id="task-field" />
          <button className="monday-button-add" onClick={saveTask}>ADD</button>
          <ul className="myul" id="myul">
          </ul>
    </div>
  );
  ReactDOM.render(sabado,document.getElementById("page-content"));
};

function sunday() {
 let linggo=(
      <div className="start">
    <div>
    <audio autoPlay src="audio/sun.mp3">
      <source src="sun.mp3"></source>
    </audio>
      <div className="monday-div">Sunday</div>
     <div className="arrows-div">
     <img className="arrowtotheleft"onClick={monday} alt="" src="img/arrowtotheright.png"/>
     <img className="arrowtotheright" alt="" onClick={saturday} src="img/arrowtotheleft.png"/>
      </div>
      </div>
      <input type="text" placeholder="What's on Your mind?" className="monday-input" id="task-field" />
          <button className="monday-button-add" onClick={saveTask}>ADD</button>
          <ul className="myul" id="myul">
          </ul>
    </div>
  );
  ReactDOM.render(linggo,document.getElementById("page-content"));
};
function main(){
	let content = 
	<div className="page">
    <div className = "views">
    <div className="view view-main">
    <div className="navbar">
    <div className="navbar-inner">
    <div className="center">To Do List</div>
    </div>
    </div>
    <br /><br /><br />
    <div className = "page-content" id="page-content">
    </div>
       </div>
       </div>
       </div>;
       ReactDOM.render(content,document.getElementById('root'));
}
main();
  var a= (
    <div className="start">
    <div>   
      <div className="monday-div">Monday</div>
      <div className="arrows-div">
     <img className="arrowtotheleft" alt="" onClick={tuesday} src="img/arrowtotheright.png"/>
     <img className="arrowtotheright" alt="" onClick={sunday} src="img/arrowtotheleft.png"/>      </div>
      </div>
      <input type="text" placeholder="What's on Your mind?" className="monday-input" id="task-field" />
          <button className="monday-button-add" onClick={saveTask}>ADD</button>
          <ul className="myul" id="myul">
          </ul>
          </div>
        
  );
  ReactDOM.render(a,document.getElementById("page-content"));

  var list=[];
  var listCount =0;

  function saveTask() {
    var task = document.getElementById('task-field').value;
    var newtask = document.createElement('li');
    newtask.setAttribute('id','task ' + listCount);
    //var taskitem = (<div>{task}<button onClick={removeTask}>x</button></div>);//document.createElement('button');
    var taskitem = document.createElement('button');
	newtask.innerText = task;
    taskitem.innerText = "x";
    taskitem.setAttribute("onclick","removeTask(" + listCount+")");
    newtask.appendChild(taskitem);
    //ReactDOM.render(taskitem,newtask);
    var parentList = document.getElementById('myul').appendChild(newtask);    
    list[listCount] = parentList;
    listCount += 1;
    console.log(newtask);
  }

  function removeTask(count) {
    console.log('Delete');
    document.getElementById('myul').removeChild(document.getElementById('task '+count));
  }  
  
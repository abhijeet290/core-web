const element = React.createElement("h1", {}, "Hello from React CDN");
// ReactDOM.render(element, document.getElementById("root")); this is deprecated, this is because earlier if we clicked on any button till that task gets completed it blocks us from clicking any other button, which results in bad user experience, till that time it blocks us from clicking on other buttons as js is single threaded
// with the help of createRoot react keep the control and if any new action happens in that case it stops the previous action and do the latest event

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(element)
<h1>FEEDBACK SURVEY LOOP (Weekend Challenge #5)</h1>
<h2>An app to collect survey information for a database</h2>



For this project, I constructed a basic feedback survey loop somewhat based on the reflections feature in our student portal. I started by making an outline of how I wanted the project to look and partly map out process as well. 

My first task in terms of writing code was to establish the routes that would allow movement between consecutive screens on a button click and build much of the static HTML/CSS for each of my screens. I then proceeded to refactor the first four screens where the individual data inputs would be into respective components and construsted the store and reducer that would collect this data into an array in redux. Once this was successfully tested and displaying the correct data in the console.log, it was time render this data to the summary screen. This proved to be very challenging, as I was unable to use .map on the second function/reducer which was meant to trigger the render on the same button click that was also sending the last data item to the array. It ended up trying to render an incomplete array and the browser did not cooperate with that. During this period of reflection and study for a workaround I also managed to find solutions to prevent screen advancement on empty fields (disabled={!''}) and set some limitations to data input for numbers (I'll admit it isn't totally without bugs). After consulting with second set of eyes, a workaround was discovered (albeit not ideal) that utilized .map on the first reducer and appended the data to the DOM. The second reducer/dispatch path is seemingly irrelavant, but I am unable to maintain functionality by removing it.

POST route was successfully tested on server side once the DB was hooked up, but it is currently not functioning on the client side. I suspect this may be related to the way the render mentioned above is being handled. Was able to find a solution for the app reset/refresh very close to the deadline.

Will revisit this project to get the POST route working and clean up some of the code. Also may add some hover effects to the buttons to alert the user that the screen won't advance without any data input.

<img src ="beforeRefactor.png" alt="Before_Refactor" width=200 height= />

<img src ="afterRefactor.png" alt="After_Refactor" width=200 height= />

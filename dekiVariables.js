//This is a comment
"This is text";
<br/> //Line break

<a href="http://www.mindtouch.com">"MindTouch"</a>; //Acordarse del ";" por mas que no este en los ejemplos
//la diferencia de ponerlo acá y en el html, es que aca lleva "" pero no se ven... y en el html, si se las pongo, se ven... 
//en el html, funciona bien sin las comillas: <p><a href="http://www.hyperlink.com">Text for your hyperlink</a></p>
<br/><br/> //Line space

//Concatenate    "..x.."
var x=5;
var y=6;

""..x..""..y.."";  //muestra "56"

//Don't forget to put a semicolon after the text and before the line break or line space.
<br/><br/> 

// DekiScript operators
// Operator	Description
// =	    sets something
// ==	    compares things
// &&	    and
// ||	    or
// !=	    does not
// ()	    allows DekiScript in HTML


var url = "http://www.mindtouch.com";
url;
<br/><br/>


var x =25;
if (user.title != "How to Use DekiScript for Programmers")
{
"If you are a programmer look at this link instead:";
let x = 75;
}
<br/>
<br/>
x;
<br/><br/>


//Si lo siguiente, lo envuelvo en {{
var output = "Hello World";		        // Set the output variable
output;					                // Print the output

let output = "Hello Universe";  	    // Reset the ouput variable
output; 				                // Print the output
//}} y lo paso al html, funciona OK!


<br/><br/>

coberturaMedicamentos;
<br/><br/>

var linkURL = 'https://success.mindtouch.com';

<p>
'This is just a string.'; <a href=(linkURL) target='_blank'> 'This text must be surrounded in quotes to be rendered as a link!' </a>
</p>

<p>
'This is just a string.'; <a href=(coberturaMedicamentos) target='_blank'> 'coberturaMedicamentos link!' </a>
</p>

<br/><br/>

//Surrounding strings with double quotes
//For best practices, we recommend surrounding text strings with single quotes, though in some cases you may need double quotes. 
//For instance, if you need to include an apostrophe within a text string, you'll need to surround that text string with double quotes:
<p>
"This is John's example of a link"; <a href=(linkURL) target='_blank'> 'This text must be surrounded in quotes to be rendered as a link!' </a>
</p>

<br/><br/>

"User: " ..user.displayname;<br/>
"Page title: " ..page.title;<br/>
"Site name: " ..site.name;<br/>

// Explanation of the syntax 
// Syntax element       	Description
// ""	                    Designate the beginning and end of the custom text string you want to display
// ..	                    Designates the current page
// user.displayname 	    The object.property call
// ;	                    The operator indicating the end of a line of code (necessary)
// <br/>	                Forces a line break

// Assign properties to objects
// The MindTouch DekiScript objects are:  user, page and site.
// Assign properties by adding a period . after the object followed by the property:

// Object with property	    Function
// user.name	            Displays the name of users
// user.anonymous           Displays anonymous users
// page.title	            Displays the page title
// page.author	            Displays the author of the page
// site.uri	                Displays the URL of the site
// site.name	            Displays the name of the site

<br/><br/>

<br/><br/>

<br/><br/>

<br/><br/>

<br/><br/>

"Debajo de esto es HTML - Arriba, Deki";
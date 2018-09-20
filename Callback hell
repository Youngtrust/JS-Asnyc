<h3>
What is callback call
</h3>
<br/>
Asynchronous JavaScript, or JavaScript that uses callbacks, is hard to get right intuitively.
A lot of code ends up looking like this:
<br/>
<code>
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})

</code>
<h3>
What are callbacks?
</h3>
<br/>
Callbacks are just the name of a convention for using JavaScript functions. <br/>
There isn't a special thing called a 'callback' in the JavaScript language, it's just a convention. <br/>
Instead of immediately returning some result like most functions, functions that use callbacks take some time to produce a result.<br/> 
The word 'asynchronous', aka 'async' just means 'takes some time' or 'happens in the future, not right now'.<br/>
Usually callbacks are only used when doing I/O, e.g. downloading things, reading files, talking to databases, etc.

<br/>

<h2>How do I fix callback hell</h2>
<br/>
Keep your code shallow<br/>
Modularize<br/>
Handle every single error<br/>



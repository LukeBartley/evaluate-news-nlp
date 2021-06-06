function handleSubmit(event) {
  const inputText = document.getElementById('name').value;
  event.preventDefault()
  console.log("::: Form Submitted :::")

  //update form
  if(Client.checkForName(inputText)) {
    document.getElementById('coming').classList.remove('hide')
    document.getElementById('data-list').classList.add('hide')

    fetch('http://localhost:8080/getSentiment',{
      method: 'POST',
      cache: "no-cache",
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type':'application/json',
      },
      body:JSON.stringify({inputText}),
    })
    .then (res => {
      console.log(res)
      return res.json()
    })
    // update ui
    .then (function (response) {
        console.log("Updating the UI")
        document.getElementById('coming').classList.add('hide')
        const newScore_tag = Client.rankScore(response.score_tag);
        document.getElementById('score_tag').innerHTML = `Sentiment: ${newScore_tag}`
        document.getElementById('agreement').innerHTML = `Agreement: ${response.agreement}`
        document.getElementById('confidence').innerHTML = `Confidence: ${response.confidence}/100`
        document.getElementById('irony').innerHTML = `Irony: ${response.irony}`
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${response.subjectivity}`
        document.getElementById('data-list').classList.remove('hide')
    })
  }
  else {
    alert("Please enter a valid URL");
    console.log("You haven't entered a valid url");
  }
}

export { handleSubmit }

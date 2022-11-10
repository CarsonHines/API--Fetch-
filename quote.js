window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

// TODO: Modify to use Fetch API
async function fetchQuotes(topic, count) {
   let x = await fetch(`https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`)
      .then((response) => response.json())
      .then((data) => y = data);

   let html = "<ol>";
   if (y.error) {
      html = `Topic '${topic}' not found`;
   }

   else {
      Object.keys(y).forEach(i => {
         html += `<li>${y[i].quote} - ${y[i].source}</li>`;
      });
   }

   html += "</ol>";
   document.querySelector("#quotes").innerHTML = html;
}
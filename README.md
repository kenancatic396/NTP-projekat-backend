### PROJEKAT NTP 

### Setup 
Da bi pokrenuli ovaj API na svom kompjuteru:


-napravite database.config.js fajl u root od config folder sa pratecom sintaxom

module.exports = {
  url:
    "mongodb+srv://username:password@cluster0.ccdtr.mongodb.net/yourDatabaseName?retryWrites=true&w=majority",
};

-uzmite svoj connection string u zamjenite umjesto ovog
- u ovom slucaju moze se koristiti vec postavljeni

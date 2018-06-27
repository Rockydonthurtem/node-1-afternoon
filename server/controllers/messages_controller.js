
let  messages = [];
let id = 0;
module.exports ={
   create: (req,res) =>{
    const {text,time} = req.body
        message.push({id,text,time,});id++;
        res.status(200).send(messages);
   },
   read:(req,res)=>{
       res.status(200).send(mesages);

   },
   update:(req,res)=>{
       const {text} = req.body;
       constId = req.params.id;
       const messageIndex = messages.findIndex(messages => messages.id == UpdateId);
       let mesages = messages[messageIndex]

       messages[messageIndex] = {
           id = message.id,
           text = text || message.text,
           time = message.time
       }
       res.status(200).send (messages)

   },
   delete:(req,res)=>{
        const deleteId  = req.params.id;
        messageIndex = messages.findIndex( message => message.id == deleteId );
        messages.splice(messageIndex,1);
        res.status(200).send(messages);
   }
}
const budgetItems = [{
    id:0,
    category: "food",
    item: "tennisball",
    cost: 10,
    date: "today"
}];
let id = 1;

module.exports = {
    create: (req,resp,body) => {
        const {category, item, date} = req.body;
        let cost = parseInt(req.body.cost);
        budgetItems.push({id, category, item, cost, date})
        id++
        resp.status(200).send(budgetItems);

    },
    read: (req, resp) => {
        resp.status(200).send(budgetItems);

    },
    update: (req, resp, body) => {
        const updateID = req.params.id;
        const {button} = req.body;
        console.log(updateID,button)
            for(var i=0; i<budgetItems.length; i++){
                if(budgetItems[i].id == updateID){
                    if(button === "increase"){
                        budgetItems[i].cost  += 1;
                    }else{
                        budgetItems[i].cost -= 1;
                    }        
                }
            }
        resp.status(200).send(budgetItems);

    },
    delete: (req, resp) => {
        const deleteID = req.params.id;
        console.log(deleteID);
        budgetIndex = budgetItems.findIndex(item => item.id == deleteID);
        budgetItems.splice(budgetIndex,1);
        resp.status(200).send(budgetItems);
    }
}
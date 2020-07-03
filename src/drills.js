const knex = require('knex')
require('dotenv').config()

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL,
})

//get all items that contain text
//take one parameter: searchTerm, and query the table looking for a name
//must contain the search term, case insensitive

function searchForItemName(searchTerm) {
    knexInstance
        .select('*')
        .from('shopping_list')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(result => {
            console.log(result)
        })
}
// searchForItemName('fish')

//paginate items to 6 per page
function paginateItems(pageNumber) {
    const productsPerPage = 6
    const offset = productsPerPage * (pageNumber-1)
    knexInstance
        .select('*')
        .from('shopping_list')
        .limit(productsPerPage)
        .offset(offset)
        .then(result => {
            console.log(result)
        })
}
// paginateItems(2)

//get all items added after date
function getItemsAfterDays(daysAgo) {
    knexInstance
        .select('*')
        .from('shopping_list')
        .where('date_added','>', knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo))
        .then(result => {
            console.log(result)
        })
}
// getItemsAfterDays(30)

//get total cost for each category
function totalCost() {
    knexInstance
        .select('category')
        .sum('price AS total')
        .from('shopping_list')
        .groupBy('category')
        .then(result => {
            console.log(result)
        })
}
totalCost()
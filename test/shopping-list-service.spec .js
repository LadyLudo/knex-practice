const { expect } = require("chai")

const ShoppingService = require('../src/shopping-list-service')
const knex = require('knex')

describe('Shopping service object', function() {
    let db
    let testItems = [
        {
            id: 1,
            name: "Test Name One",
            price: "10.00",
            date_added: new Date('2029-01-22T16:28:32.615Z'),
            checked: true
        },
        {
            id: 2,
            name: "Test Name Two",
            price: "20.00",
            date_added: new Date('2029-01-22T16:28:32.615Z'),
            checked: false
        },
        {
            id: 3,
            name: "Test Name Three",
            price: "30.00",
            date_added: new Date('2029-01-22T16:28:32.615Z'),
            checked: true
        },
    ]
    before(() => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
    })
    before(() => db('shopping_list').truncate())

    afterEach(() => db('shopping_list').truncate())

    after(() => db.destroy())

    context('Given shopping_list has data', () => {
        beforeEach(() => {
            return db
                .into('shopping_list')
                .insert(testItems)
        })

        it('getAllItems() resolves all items from shopping_list table', () => {
            return ShoppingService.getAllItems(db)
                .then(actual => {
                    expect(actual).to.eql(testItems)
                })
        })

        it('getById() resolves an article by id from shopping_list table', () => {
            const thirdId = 3
            const thirdTestItem = testItems[thirdId -1]
            return ShoppingService.getById(db, thirdId)
                .then(actual => {
                    expect(actual).to.eql({
                        id: thirdId,
                        name: thirdTestItem.name,
                        price: thirdTestItem.price,
                        date_added: thirdTestItem.date_added,
                        checked: thirdTestItem.checked
                    })
                })
        })

        it('deleteItem() removes an item by id from shopping_list table', () => {
            const itemId = 3
            return ShoppingService.deleteItem(db, itemId)
                .then(() => ShoppingService.getAllItems(db))
                .then(allItems => {
                    const expected = testItems.filter(item => item.id !== itemId)
                    expect(allItems).to.eql(expected)
                })
        })

        it('updateItem() updates an item from the shopping_list table', () => {
            const idOfItemToUpdate = 3
            const newItemData = {
                name: 'updated name',
                checked: false,
                date_added: new Date(),
                price: "20.00"
            }
            return ShoppingService.updateItem(db, idOfItemToUpdate, newItemData)
                .then(() => ShoppingService.getById(db, idOfItemToUpdate))
                .then(item => {
                    expect(item).to.eql({
                        id: idOfItemToUpdate,
                        ...newItemData,
                    })
                })
        })
    })

    context('Given shopping_list has no data', () => {
        it('getAllItems() resolves an empty array', () => {
            return ShoppingService.getAllItems(db)
                .then(actual => {
                    expect(actual).to.eql([])
                })
        })
        it('insertItem() inserts a new item and resolves the new item with an id', () => {
            const newItem = {
                name: 'Test new item',
                checked: true,
                date_added: new Date(),
                price: "20.00"
            }
            return ShoppingService.insertItem(db, newItem)
                .then(actual => {
                    expect(actual).to.eql({
                        id: 1,
                        name: newItem.name,
                        checked: newItem.checked,
                        date_added: newItem.date_added,
                        price: newItem.price
                    })
                })
        })
    })
})
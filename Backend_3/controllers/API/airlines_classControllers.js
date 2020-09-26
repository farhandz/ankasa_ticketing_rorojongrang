const airlinesClassModel = require('../../model/airlines_class')
const response = require('../../helper/response')

const airlinesClass = {
    getAll: (req,res) => {
        try {
            airlinesClassModel.getAll().then((result)=> {
                response.success(res,result,"Get All airlines Class success")
            })
        } catch {
            response.failed(res,[],'Internal server error')
        }
    },
    add: (req,res) => {
        try {
        const body = req.body
        airlinesClassModel.add(body)
        .then((result)=>{
            response.success(res,result,"Add airlines Class Success")
            })
        } catch (err){
            response.failed(res,[],err.message)
        }
    },
}

module.exports = airlinesClass
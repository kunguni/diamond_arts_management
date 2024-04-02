const app = require('./app');
const usermodel = require('./model/user_model');
const mongodb = require('./config/mongodb');
const todomodel = require('./model/todo_model');
const productionmodel = require('./model/production_model');
const teacherbookingmodel = require('./model/teacher_booking_model');
const teacherregmodel = require('./model/teacher_reg_model');
const marketerdetailsmodel = require('./model/first_term_marketer_model');
const SecondTermMarketerdetailsmodel = require('./model/second_term_marketer_model');
const ThirdTermMarketerdetailsmodel = require('./model/third_term_marketer_model');
const FirstTermCastdetailsmodel = require('./model/first_term_cast_model');
const SecondTermCastdetailsmodel = require('./model/second_term_cast_model');
const ThirdTermCastdetailsmodel = require('./model/third_term_cast_model');
const FirstTermPerformedShowdetailsmodel = require('./model/first_term_show_management_model');
const SecondTermPerformedShowdetailsmodel = require('./model/second_term_show_management_model');
const ThirdTermPerformedShowdetailsmodel = require('./model/third_term_show_management_model');
const FirstTermBookingmodel = require('./model/first_term_booking_model');
const SecondTermBookingmodel = require('./model/second_term_booking_model');
const ThirdTermBookingmodel = require('./model/third_term_booking_model');

const port = 3000;
app.listen(port,()=>
{
    console.log('Server listening at port: http://localhost:'+port);
}
);
app.get('/', (req,res)=>
{
    res.send("God has blessed me, Sitarudi kuwa vile");
})
const express = require ('express');
const body_parser = require('body-parser');
const UserRouter = require('./routers/user_route');
const ToDoRouter = require('./routers/todo_router');
const ProductionRouter = require('./routers/production_router');
const TeacherBookingRouter = require('./routers/teacher_booking_router');
const TeacherRegRouter = require('./routers/teacher_reg_router');
const FirstTermMarketerRouter = require('./routers/first_term_marketer_router');
const SecondTermMarketerRouter = require('./routers/second_term_marketer_router');
const ThirdTermMarketerRouter = require('./routers/third_term_marketer_router');
const FirstTermCastRouter = require('./routers/first_term_cast_router');
const SecondTermCastRouter = require('./routers/second_term_cast_router');
const ThirdTermCastRouter = require('./routers/third_term_cast_router');
const FirstTermPerformedShowRouter = require('./routers/first_term_show_management_router');
const SecondTermPerformedShowRouter = require('./routers/second_term_show_management_router');
const ThirdTermPerformedShowRouter = require('./routers/third_term_show_management_router');
const FirstTermBookingRouter = require('./routers/first_term_booking_router');
const SecondTermBookingRouter = require('./routers/second_term_booking_router');
const ThirdTermBookingRouter = require('./routers/third_term_booking_router');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Adjust in production
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  
app.use(body_parser.json());
app.use('/',UserRouter);
app.use('/',ToDoRouter);
app.use('/',ProductionRouter);
app.use('/',TeacherBookingRouter);
app.use('/',TeacherRegRouter);
app.use('/',FirstTermMarketerRouter);
app.use('/',SecondTermMarketerRouter);
app.use('/',ThirdTermMarketerRouter);
app.use('/',FirstTermCastRouter);
app.use('/',SecondTermCastRouter);
app.use('/',ThirdTermCastRouter);
app.use('/',FirstTermPerformedShowRouter);
app.use('/',SecondTermPerformedShowRouter);
app.use('/',ThirdTermPerformedShowRouter);
app.use('/',FirstTermBookingRouter);
app.use('/',SecondTermBookingRouter);
app.use('/',ThirdTermBookingRouter);


module.exports = app;
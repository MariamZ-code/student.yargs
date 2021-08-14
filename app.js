const students= require('./data.js');
const yargs= require("yargs");

//add
yargs.command({
    command:'add',
    describe:" add student",
    builder:{
        id:{
            describe:"Adding student's ID",
            demandOption:true,
            type:'number' 

        },
        name:{
            describe:"Adding student's Name",
            demandOption:true,
            type:"string"

        },
        grade:{
            describe:"Adding student's Grade",
            demandOption:true,
            type:"number"

        },
        comment:{
            describe:"Adding student's comment",
            demandOption:false, 
            type:"string"
        }
      

    },
    handler:(argv)=>{
        console.log("succuss")
        students.addStudent(argv.id, argv.name ,argv.grade, argv.comment);
    }

});


//read
yargs.command({
    command:'read',
    describe:" read student",
    builder:{
        id:{
            describe:"read by using student's ID",
            demandOption:true,
            type:'number' 

        },
    },
    handler:(argv)=>{
        

        students.readstudents(argv.id);
    }

});


//delete
yargs.command({
    command:'delete',
    describe:" delete student",
    builder:{
        id:{
            describe:"delete by using student's ID",
            demandOption:true,
            type:'number' 

        },
    },
    handler:(argv)=>{
       
      students.removeStudent(argv.id);
    }

});


//list
yargs.command({
    command:'list',
    describe:" list student",
   
    handler:(argv)=>{
        
     students.listStudents()
    }

});


console.log(yargs.argv)
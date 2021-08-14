const fs =require("fs");
//add a students 
const addStudent = (id, name,grade,comment) => {
   
    const students = loadStudents(); 
    const dupricateID = students.filter((student) => {
       
            
      return student.id === id;
    }); 
    console.log(dupricateID);
  
    if (dupricateID.length === 0) {
      students.push(
        
        {
          id,
          name,
          grade,
          comment
        }
      );
      saveStudents(students);
      console.log("Saved Successfully");
    } else {
      console.log("Error Duplicate Title");
    }
  };

  
 


  // delete a student
  const removeStudent = (id) =>{
    
    const students = loadStudents()
    const studentsToKeep = students.filter((student)=>{
       
        
        return student.id !== id
    })
    console.log(studentsToKeep)
    saveStudents(studentsToKeep)
   
};




//read an information 

const readstudents = (id) =>{

    const students = loadStudents()
    const studentInformation = students.find((student)=>{
    return  student.id === id;
    })

    

    if(studentInformation){
        console.log(studentInformation);
        console.log(studentInformation.id);
        console.log(studentInformation.name);
    }
};

// list of students

const listStudents = () =>{
    const students = loadStudents();
    students.forEach((student)=>{
        console.log(student.id);
        console.log(student.name);
    })
}






const loadStudents = () => {
   
  
    try {
      const dataBuffer = fs.readFileSync("student.json").toString();
      return JSON.parse(dataBuffer);
    } catch (e) {
      return [];
    }
  };
  
 
  const saveStudents = (students) => {
    
    const saveData = JSON.stringify(students);
    fs.writeFileSync("student.json", saveData);
  };
  module.exports = {
   
    addStudent,
    removeStudent,
    readstudents ,
    listStudents 

  
  };
  
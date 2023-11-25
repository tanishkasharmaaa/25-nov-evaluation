function studentDetail(name,roll_no,className,section,marks_of_5_subjects){
this.name=name;
this.roll_no=roll_no;
this.class=className;
this.marks_of_5_subjects=marks_of_5_subjects;
this.section=section

this.print_top3subjects=function(){
    const subjects=Object.entries(this.marks_of_5_subjects).sort((a, b) => b[1] - a[1]);

    let top3subjects=subjects.slice(0,3).map(subject=>subject[0]);
    console.log("Top 3 subjects:"+ top3subjects.join(","));
}
this.printReportCard=function(){
    console.log("+---------------------+");
    console.log("|     REPORT CARD     |");
    console.log("|Name    -  "+ this.name);
    console.log("|Roll no.  -"+this.roll_no);
    console.log("| Class    -"+this.class);
    console.log("|Section-"+ this.section);
    

    for(let subject in this.marks_of_5_subjects){
        console.log("| "+subject.charAt(0).toUpperCase()+subject.slice(1)+"-"+this.marks_of_5_subjects[subject])
    }
    let totalmarks=Object.values(this.marks_of_5_subjects).reduce((sum,mark)=>sum+mark,0);
    let percentage=(totalmarks/(Object.keys(this.marks_of_5_subjects).length*100))*100;
    console.log("|Percentage - "+percentage.toFixed(1)+"%");
    console.log("------------------------+")
};

        
    }

let studentdetail={
    name:"Huzaifa",
    roll_no:16,
    class:"X",
    section:"A",
    marks_of_5_subjects:{
        
            science: 72,
            maths: 75,
            social_science: 79,
            english: 80,
            hindi: 67,
        }
    }
const student= new studentDetail(
    studentDetail.name,
    studentDetail.roll_no,
    studentDetail.class,
    studentDetail.section,
    studentDetail.marks_of_5_subjects
)
student.print_top3subjects()
student.printReportCard()
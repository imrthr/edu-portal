import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admission-form', 
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.scss']
})
export class AdmissionFormComponent implements OnInit {

admissionForm:FormGroup;
// admissionData={};

  constructor(public formBuilder:FormBuilder,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.admissionForm = this.formBuilder.group({
      firstName:[''],
      middleName:[''],
      lastName:[''],
      dob:[''],
      age:[''],
      gender:[''],
      bg:[''],
      uploadImage:[''],
      email:[''],
      phone:[''],
      fatherName:[''],
      fOccupation:[''],
      fDob:[''],
      fAge:[''],
      motherName:[''],
      mOccupation:[''],
      mDob:[''],
      mAge:[''],
      cAddress:[''],
      cLandmark:[''],
      cPin:[''],
      cState:[''],
      cCity:[''],
      cDistric:[''],
      pAddress:[''],
      pLandmark:[''],
      pPin:[''],
      pState:[''],
      pCity:[''],
      pDistric:[''],
      qualification:[''],
      passingYear:[''],
      qualificationUSC:[''],
      percent:[''],
      uploadMarksheet:[''],
      course:[''],
      courseUCS:[''],
      paymentType:[''],
      paymentMethod:[''],
      idProof:[''],
      addressProof:[''],
      uploadImg:['']
    });
   }
   
onSubmit(){
  let obj =this.admissionForm.value;
 
 let admissionData={

    personal_info:{
      fn:obj.firstName,
      mn:obj.middleName,
      ln:obj.lastName,
      dob:obj.dob,
      age:obj.age,
      gender:obj.gender,
      b_g:obj.bg,
      upload_img:obj.uploadImage,
      email:obj.email,
      phone:obj.phone,
    },
    parents_info:{
      f_n:obj.fatherName,
      f_occupation:obj.fOccupation,
      f_dob:obj.fDob,
      f_age:obj.fAge,
      m_n:obj.motherName,
      m_occupation:obj.mOccupation,
      m_dob:obj.mDob,
      m_age:obj.mAge,
    },
    contact_info:{
      c_address:obj.cAddress,
      c_landmark:obj.cLandmark,
      c_pin:obj.cPin,
      c_state:obj.cState,
      c_city:obj.cCity,
      c_distric:obj.cDistric,
      p_address:obj.pAddress,
      p_landmark:obj.pLandmark,
      p_pin:obj.pPin,
      p_state:obj.pState,
      p_city:obj.pCity,
      p_distric:obj.pDistric,
    },
    education:{
      qualification:obj.qualification,
      passing_year:obj.passingYear,
      qualification_USC:obj.qualificationUSC,
      percent:obj.percent,
      upload_marksheet:obj.uploadMarksheet,
    },
    program:{
      course:obj.course,
      course_UCS:obj.courseUCS,
      payment_type:obj.paymentType,
      payment_method:obj.paymentMethod,
    },
    kyc:{
      id_proof:obj.idProof,
      address_proof:obj.addressProof,
      upload_img:obj.uploadImg,
    }
  } 
  console.log(admissionData);
}
openModal(content) {
  this.modalService.open(content);
}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  usuarios: any = {
    nome: null,
    id: null,
    cpf: null,
    dataConsulta: null,
    UltraSonografia: null,
    RadiografiaTorax: null,
    TomografiaComputadorizada: null,
    ResonanciaMagnetica: null,
    Colonoscopia: null,
    Endoscopia: null,
    DescricaoPaciente: null,
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    console.log(form);
  }

  showDados() {
    console.log(this.usuarios);
  }
}

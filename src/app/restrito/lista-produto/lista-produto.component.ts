import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../produto.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrl: './lista-produto.component.css',
})
export class ListaProdutoComponent implements OnInit {
  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService, private _router: Router, private _loginService: LoginService){ }

  ngOnInit(): void {
    this.listarProdutos();
    this._loginService.setMostraMenu(false);
  }

  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe((retornaProduto) => {
      this.produtos = retornaProduto.map((item) => {
        return new Produto(
          item.id,
          item.produto,
          item.descricao,
          item.foto,
          item.preco
        );
      });
    });
  }

  excluir(id: number) {
    this._produtoService.deletarProduto(id).subscribe(
      (produto) => {
        this.listarProdutos();
      },
      (err) => {
        console.log("Erro ao Excluir!");
      }
    );

    this._router.navigate(["/restrito/lista"]);
  }
}

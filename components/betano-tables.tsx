"use client"

import React from "react"
import { StyledTable, StyledTableHeader, StyledTableBody, StyledTableRow, StyledTableCell } from "@/components/ui/styled-table"
import { AdvancedTextAnimation } from "@/components/advanced-text-animation"
import { MagneticElement } from "@/components/magnetic-element"

export function BetanoTables() {
  return (
    <div className="space-y-12">
      {/* Cálculo de Participantes */}
      <div className="card-container p-8">
        <div className="heading-medium font-sans mb-6">
          <AdvancedTextAnimation tag="h3" fontWeight="bold" type="slide" direction="up">
            Cálculo de Participantes e Capacidade
          </AdvancedTextAnimation>
        </div>

        {/* Perfis de Usuário */}
        <div className="mb-8">
          <h4 className="text-lg font-medium mb-4 text-white/90">Perfis de Usuário</h4>
          <StyledTable>
            <StyledTableHeader>
              <StyledTableRow>
                <StyledTableCell isHeader>Perfil</StyledTableCell>
                <StyledTableCell isHeader>Percentual</StyledTableCell>
                <StyledTableCell isHeader>Tempo (seg)</StyledTableCell>
              </StyledTableRow>
            </StyledTableHeader>
            <StyledTableBody>
              <StyledTableRow>
                <StyledTableCell>Rápido</StyledTableCell>
                <StyledTableCell>20%</StyledTableCell>
                <StyledTableCell>25s</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Médio</StyledTableCell>
                <StyledTableCell>50%</StyledTableCell>
                <StyledTableCell>40s</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Lento</StyledTableCell>
                <StyledTableCell>30%</StyledTableCell>
                <StyledTableCell>60s</StyledTableCell>
              </StyledTableRow>
            </StyledTableBody>
          </StyledTable>
          <p className="text-sm text-white/60 mt-2">Tempo médio global: 43 segundos</p>
        </div>

        {/* Configuração dos Totens */}
        <div className="mb-8">
          <h4 className="text-lg font-medium mb-4 text-white/90">Configuração dos Totens</h4>
          <StyledTable>
            <StyledTableHeader>
              <StyledTableRow>
                <StyledTableCell isHeader>Item</StyledTableCell>
                <StyledTableCell isHeader>Especificação</StyledTableCell>
              </StyledTableRow>
            </StyledTableHeader>
            <StyledTableBody>
              <StyledTableRow>
                <StyledTableCell>Quantidade</StyledTableCell>
                <StyledTableCell>4 unidades</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Descrição</StyledTableCell>
                <StyledTableCell>Totens touch 55″</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Usuários por totem</StyledTableCell>
                <StyledTableCell>1 pessoa</StyledTableCell>
              </StyledTableRow>
            </StyledTableBody>
          </StyledTable>
        </div>

        {/* Capacidade de Cadastros */}
        <div className="mb-8">
          <h4 className="text-lg font-medium mb-4 text-white/90">Capacidade de Cadastros</h4>
          <StyledTable>
            <StyledTableHeader>
              <StyledTableRow>
                <StyledTableCell isHeader>Período</StyledTableCell>
                <StyledTableCell isHeader>Quantidade</StyledTableCell>
              </StyledTableRow>
            </StyledTableHeader>
            <StyledTableBody>
              <StyledTableRow>
                <StyledTableCell>Por totem (5 min)</StyledTableCell>
                <StyledTableCell>6 cadastros</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Por giro (4 totens)</StyledTableCell>
                <StyledTableCell>24 cadastros</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Por hora</StyledTableCell>
                <StyledTableCell>288 cadastros</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Por dia</StyledTableCell>
                <StyledTableCell className="font-bold text-white">1.730 cadastros</StyledTableCell>
              </StyledTableRow>
            </StyledTableBody>
          </StyledTable>
        </div>

        {/* Tempo de Permanência */}
        <div>
          <h4 className="text-lg font-medium mb-4 text-white/90">Tempo de Permanência</h4>
          <StyledTable>
            <StyledTableHeader>
              <StyledTableRow>
                <StyledTableCell isHeader>Etapa</StyledTableCell>
                <StyledTableCell isHeader>Tempo (seg)</StyledTableCell>
              </StyledTableRow>
            </StyledTableHeader>
            <StyledTableBody>
              <StyledTableRow>
                <StyledTableCell>Fila</StyledTableCell>
                <StyledTableCell>108s</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Registro e aposta</StyledTableCell>
                <StyledTableCell>43s</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Espera até giro</StyledTableCell>
                <StyledTableCell>150s</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Giro e anúncio</StyledTableCell>
                <StyledTableCell>30s</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell className="font-bold">Total</StyledTableCell>
                <StyledTableCell className="font-bold text-white">350s (5min 50s)</StyledTableCell>
              </StyledTableRow>
            </StyledTableBody>
          </StyledTable>
        </div>
      </div>

      {/* Fluxo de Cadastros e Brindes */}
      <div className="card-container p-8">
        <div className="heading-medium font-sans mb-6">
          <AdvancedTextAnimation tag="h3" fontWeight="bold" type="slide" direction="up">
            Fluxo de Cadastros e Distribuição de Brindes
          </AdvancedTextAnimation>
        </div>

        {/* Metas e Configuração */}
        <div className="mb-8">
          <h4 className="text-lg font-medium mb-4 text-white/90">Metas e Configuração</h4>
          <StyledTable>
            <StyledTableHeader>
              <StyledTableRow>
                <StyledTableCell isHeader>Métrica</StyledTableCell>
                <StyledTableCell isHeader>Valor</StyledTableCell>
              </StyledTableRow>
            </StyledTableHeader>
            <StyledTableBody>
              <StyledTableRow>
                <StyledTableCell>Fluxo Estação Sé</StyledTableCell>
                <StyledTableCell>338.000 passagens/dia</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Taxa de conversão alvo</StyledTableCell>
                <StyledTableCell>0,5%</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Meta de cadastros/dia</StyledTableCell>
                <StyledTableCell className="font-bold text-white">1.700</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Giros por hora</StyledTableCell>
                <StyledTableCell>12</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Horas de ação/dia</StyledTableCell>
                <StyledTableCell>6 horas</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Total giros/dia</StyledTableCell>
                <StyledTableCell>72</StyledTableCell>
              </StyledTableRow>
            </StyledTableBody>
          </StyledTable>
        </div>

        {/* Regras de Premiação */}
        <div>
          <h4 className="text-lg font-medium mb-4 text-white/90">Regras de Premiação por Rodada</h4>
          <StyledTable>
            <StyledTableHeader>
              <StyledTableRow>
                <StyledTableCell isHeader>Acerto</StyledTableCell>
                <StyledTableCell isHeader>Prêmio</StyledTableCell>
                <StyledTableCell isHeader>Quantidade</StyledTableCell>
              </StyledTableRow>
            </StyledTableHeader>
            <StyledTableBody>
              <StyledTableRow>
                <StyledTableCell>Número exato</StyledTableCell>
                <StyledTableCell>Fone Bluetooth</StyledTableCell>
                <StyledTableCell>1 unidade</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Cor correta</StyledTableCell>
                <StyledTableCell>Copo personalizado</StyledTableCell>
                <StyledTableCell>~3 unidades</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Paridade correta</StyledTableCell>
                <StyledTableCell>Cordão celular</StyledTableCell>
                <StyledTableCell>~2 unidades</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Nenhum acerto</StyledTableCell>
                <StyledTableCell>Chaveiro Betano</StyledTableCell>
                <StyledTableCell>1 por tel/dia</StyledTableCell>
              </StyledTableRow>
            </StyledTableBody>
          </StyledTable>
        </div>
      </div>

      {/* Estoque de Brindes */}
      <div className="card-container p-8">
        <div className="heading-medium font-sans mb-6">
          <AdvancedTextAnimation tag="h3" fontWeight="bold" type="slide" direction="up">
            Estoque de Brindes Planejado
          </AdvancedTextAnimation>
        </div>

        <StyledTable>
          <StyledTableHeader>
            <StyledTableRow>
              <StyledTableCell isHeader>Item</StyledTableCell>
              <StyledTableCell isHeader>Quantidade Total</StyledTableCell>
              <StyledTableCell isHeader>Distribuição</StyledTableCell>
            </StyledTableRow>
          </StyledTableHeader>
          <StyledTableBody>
            <StyledTableRow>
              <StyledTableCell>Fone Bluetooth</StyledTableCell>
              <StyledTableCell>555 unidades</StyledTableCell>
              <StyledTableCell>72/dia (1 por giro)</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>Copo Personalizado</StyledTableCell>
              <StyledTableCell>1.660 unidades</StyledTableCell>
              <StyledTableCell>~216/dia</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>Cordão Celular</StyledTableCell>
              <StyledTableCell>1.110 unidades</StyledTableCell>
              <StyledTableCell>~144/dia</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>Chaveiro Betano</StyledTableCell>
              <StyledTableCell>15.000 unidades</StyledTableCell>
              <StyledTableCell>Conforme demanda</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>Chaveiro (reserva)</StyledTableCell>
              <StyledTableCell>5.000 unidades</StyledTableCell>
              <StyledTableCell>Estoque de segurança</StyledTableCell>
            </StyledTableRow>
          </StyledTableBody>
        </StyledTable>

        <div className="mt-6 p-4 bg-white/5 rounded-lg">
          <p className="text-sm text-white/80">
            <span className="font-medium">Nota:</span> O estoque foi planejado para 7 dias de operação, 
            com margem de segurança de 20% para os itens principais e estoque adicional de chaveiros 
            para garantir que todos os participantes recebam ao menos um brinde.
          </p>
        </div>
      </div>
    </div>
  )
}
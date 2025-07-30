"use client"

import React from "react"
import { AdvancedTextAnimation } from "@/components/advanced-text-animation"
import { MagneticElement } from "@/components/magnetic-element"
import { StyledTable, StyledTableHeader, StyledTableBody, StyledTableRow, StyledTableCell } from "@/components/ui/styled-table"
import { useLanguage } from "@/contexts/language-context"

export function EnhancedProposal() {
  const { t } = useLanguage()

  return (
    <div className="space-y-24">
      {/* Journey Flow - Visual Process */}
      <div className="card-container p-8">
        <div className="heading-medium font-sans mb-6">
          <AdvancedTextAnimation tag="h3" fontWeight="bold" type="slide" direction="up">
            Jornada do Participante - Fluxo Visual
          </AdvancedTextAnimation>
        </div>
        <div className="heading-medium font-sans mb-4 text-white/90">
          Processo de 6 Etapas em 5min 50s
        </div>
        
        {/* Visual Flow Steps */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/20 to-blue-600/10 rounded-lg border border-blue-500/30">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <div className="flex-1">
              <div className="font-medium text-blue-200 mb-1">ABORDAGEM ATIVA</div>
              <div className="text-sm text-blue-100">Promotores com tablets mostram prêmios premium → Explicam processo rápido</div>
            </div>
            <div className="text-xs text-blue-300 font-mono">~30s</div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-px h-8 bg-white/20"></div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/20 to-green-600/10 rounded-lg border border-green-500/30">
            <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              2
            </div>
            <div className="flex-1">
              <div className="font-medium text-green-200 mb-1">CADASTRO DIGITAL</div>
              <div className="text-sm text-green-100">4 totens touchscreen 55″ → Dados de marketing + códigos únicos</div>
            </div>
            <div className="text-xs text-green-300 font-mono">50s</div>
          </div>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-white/20"></div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500/20 to-purple-600/10 rounded-lg border border-purple-500/30">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
            <div className="flex-1">
              <div className="font-medium text-purple-200 mb-1">TICKET + CONEXÃO</div>
              <div className="text-sm text-purple-100">Ticket impresso + código WhatsApp → Conexão digital imediata</div>
            </div>
            <div className="text-xs text-purple-300 font-mono">5s</div>
          </div>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-white/20"></div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 rounded-lg border border-yellow-500/30">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              4
            </div>
            <div className="flex-1">
              <div className="font-medium text-yellow-200 mb-1">EXPECTATIVA CRESCENTE</div>
              <div className="text-sm text-yellow-100">Cronômetros + vídeos promocionais → Antecipação para o giro</div>
            </div>
            <div className="text-xs text-yellow-300 font-mono">2min 30s</div>
          </div>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-white/20"></div>
          </div>

          {/* Step 5 */}
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-500/20 to-red-600/10 rounded-lg border border-red-500/30">
            <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              5
            </div>
            <div className="flex-1">
              <div className="font-medium text-red-200 mb-1">MOMENTO CLÍMAX</div>
              <div className="text-sm text-red-100">Animação roleta 30s → Mecânica realística + anúncios dramáticos</div>
            </div>
            <div className="text-xs text-red-300 font-mono">30s</div>
          </div>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-white/20"></div>
          </div>

          {/* Step 6 */}
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-500/20 to-orange-600/10 rounded-lg border border-orange-500/30">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              6
            </div>
            <div className="flex-1">
              <div className="font-medium text-orange-200 mb-1">RECOMPENSA GARANTIDA</div>
              <div className="text-sm text-orange-100">Vencedores no balcão + chaveiros para todos → Lembrança da marca</div>
            </div>
            <div className="text-xs text-orange-300 font-mono">1min 30s</div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-lg text-center">
            <div className="text-2xl font-bold text-white mb-1">72×</div>
            <div className="text-sm text-white/60">Repetições diárias</div>
          </div>
          <div className="p-4 bg-white/5 rounded-lg text-center">
            <div className="text-2xl font-bold text-white mb-1">1.730+</div>
            <div className="text-sm text-white/60">Cadastros gerados</div>
          </div>
          <div className="p-4 bg-white/5 rounded-lg text-center">
            <div className="text-2xl font-bold text-white mb-1">5min 50s</div>
            <div className="text-sm text-white/60">Tempo total</div>
          </div>
        </div>
      </div>


      {/* Technical Production Requirements */}
      <div className="card-container p-8">
        <div className="heading-medium font-sans mb-6">
          <AdvancedTextAnimation tag="h3" fontWeight="bold" type="slide" direction="up">
            {t('technicalProductionTitle')}
          </AdvancedTextAnimation>
        </div>
        <div className="heading-medium font-sans mb-4 text-white/90">
          {t('technicalProductionSubtitle')}
        </div>
        
        <div className="body-medium text-white/80 font-sans mb-6">
          <AdvancedTextAnimation tag="p" type="fade">
            {t('technicalProductionDescription')}
          </AdvancedTextAnimation>
        </div>

        {/* Video Production Details */}
        <div className="mb-8">
          <h4 className="text-lg font-medium mb-4 text-white/90">Produção de Conteúdo</h4>
          <div className="space-y-3">
            {(t('videoProductionDetails') as string[]).map((detail, index) => (
              <div key={index} className="flex items-start p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                <div className="w-2 h-2 bg-orange-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div className="body-medium text-orange-100 font-sans">
                  <AdvancedTextAnimation delay={0.1 * index} type="fade">
                    {detail}
                  </AdvancedTextAnimation>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interval Content */}
        <div>
          <h4 className="text-lg font-medium mb-4 text-white/90">{t('intervalContentTitle')}</h4>
          <div className="body-medium text-white/80 font-sans mb-4">
            {t('intervalContentDescription')}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(t('intervalContentDetails') as string[]).map((detail, index) => (
              <div key={index} className="flex items-start p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div className="body-medium text-purple-100 font-sans">
                  <AdvancedTextAnimation delay={0.1 * index} type="fade">
                    {detail}
                  </AdvancedTextAnimation>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Schedule */}
      <div className="card-container p-8">
        <div className="heading-medium font-sans mb-6">
          <AdvancedTextAnimation tag="h3" fontWeight="bold" type="slide" direction="up">
            {t('dailyScheduleTitle')}
          </AdvancedTextAnimation>
        </div>
        <div className="heading-medium font-sans mb-4 text-white/90">
          {t('dailyScheduleSubtitle')}
        </div>
        
        <div className="body-medium text-white/80 font-sans mb-6">
          <AdvancedTextAnimation tag="p" type="fade">
            {t('dailyScheduleDescription')}
          </AdvancedTextAnimation>
        </div>

        <StyledTable>
          <StyledTableHeader>
            <StyledTableRow>
              <StyledTableCell isHeader>Horário</StyledTableCell>
              <StyledTableCell isHeader>Atividade</StyledTableCell>
              <StyledTableCell isHeader>Detalhes Operacionais</StyledTableCell>
            </StyledTableRow>
          </StyledTableHeader>
          <StyledTableBody>
            {(t('dailyScheduleItems') as any[]).map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>
                  <div className="font-mono text-white font-medium">
                    {item.time}
                  </div>
                </StyledTableCell>
                <StyledTableCell>
                  <div className="font-medium text-white">
                    {item.activity}
                  </div>
                </StyledTableCell>
                <StyledTableCell>
                  <div className="text-white/80">
                    {item.details}
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </StyledTableBody>
        </StyledTable>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
            <div className="text-lg font-bold text-green-300 mb-1">72</div>
            <div className="text-sm text-green-200">Giros da roleta por dia</div>
          </div>
          <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <div className="text-lg font-bold text-blue-300 mb-1">1.730</div>
            <div className="text-sm text-blue-200">Cadastros esperados</div>
          </div>
          <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
            <div className="text-lg font-bold text-yellow-300 mb-1">6h</div>
            <div className="text-sm text-yellow-200">Horas de operação ativa</div>
          </div>
        </div>
      </div>
    </div>
  )
}
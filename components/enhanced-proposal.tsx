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
      {/* Executive Summary & Strategic Vision */}
      <div className="card-container p-8">
        <div className="heading-medium font-sans mb-6">
          <AdvancedTextAnimation tag="h3" fontWeight="bold" type="slide" direction="up">
            {t('strategicVisionTitle')}
          </AdvancedTextAnimation>
        </div>
        <div className="heading-medium font-sans mb-4 text-white/90">
          {t('strategicVisionSubtitle')}
        </div>
        <div className="body-medium text-white/80 font-sans mb-6">
          <AdvancedTextAnimation tag="p" type="fade">
            {t('strategicVisionDescription')}
          </AdvancedTextAnimation>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(t('strategicVisionPoints') as string[]).map((point, index) => (
            <div key={index} className="flex items-start p-4 bg-white/5 rounded-lg">
              <div className="w-2 h-2 bg-white/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div className="body-medium text-white/80 font-sans">
                <AdvancedTextAnimation delay={0.1 * index} type="fade">
                  {point}
                </AdvancedTextAnimation>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Complete Activation Mechanics */}
      <div className="card-container p-8">
        <div className="heading-medium font-sans mb-6">
          <AdvancedTextAnimation tag="h3" fontWeight="bold" type="slide" direction="up">
            {t('conceptMechanicsTitle')}
          </AdvancedTextAnimation>
        </div>
        <div className="heading-medium font-sans mb-4 text-white/90">
          {t('conceptMechanicsSubtitle')}
        </div>
        
        <div className="body-medium text-white/80 font-sans mb-6">
          <AdvancedTextAnimation tag="p" type="fade">
            {t('conceptMechanicsDescription')}
          </AdvancedTextAnimation>
        </div>

        <div className="p-6 bg-blue-500/10 rounded-lg border border-blue-500/20">
          <div className="body-medium text-blue-100 font-sans leading-relaxed">
            <AdvancedTextAnimation tag="p" type="fade">
              {t('conceptMechanicsFlow')}
            </AdvancedTextAnimation>
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
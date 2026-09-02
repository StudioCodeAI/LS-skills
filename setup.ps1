# ==============================================================================
# Setup Automático do LS-Skills para Google Antigravity / Gemini CLI
# ==============================================================================
$ErrorActionPreference = "Stop"

$targetDir = "$env:USERPROFILE\.gemini\config\skills"
$linkPath = "$targetDir\LS-skills"
$repoRoot = $PSScriptRoot

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "  LS-Skills - Integrador do Google Antigravity  " -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan

# 1. Garante que o diretório global de skills existe
if (!(Test-Path -Path $targetDir)) {
    Write-Host "[1/2] Criando pasta de configurações global: $targetDir" -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
} else {
    Write-Host "[1/2] Pasta global já existe: $targetDir" -ForegroundColor Green
}

# 2. Cria ou atualiza a Junção (Junction) para o repositório
if (Test-Path -Path $linkPath) {
    Write-Host "[2/2] O vínculo já está configurado em: $linkPath" -ForegroundColor Green
} else {
    Write-Host "[2/2] Criando junção simbólica: $linkPath -> $repoRoot" -ForegroundColor Yellow
    New-Item -ItemType Junction -Path $linkPath -Target $repoRoot | Out-Null
    Write-Host "✅ LS-Skills vinculado ao Antigravity com sucesso!" -ForegroundColor Green
}

Write-Host "
🎉 Pronto! Todas as skills do LS-Skills estão disponíveis no Antigravity." -ForegroundColor Cyan
Write-Host "Pressione qualquer tecla para sair..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
// API Service untuk komunikasi dengan Laravel backend
const API_BASE_URL = 'http://localhost:8000'

export interface AnalysisResult {
  text: string
  sentiment: string
  sentiment_score: number
  sentiment_details: string
  readability: number
  readability_category: string
  word_count: number
  sentence_count: number
}

export class ApiService {
  /**
   * Analisis teks langsung menggunakan Laravel API
   */
  static async analyzeText(text: string): Promise<AnalysisResult> {
    const response = await fetch(`${API_BASE_URL}/api/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ text })
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    return await response.json()
  }

  /**
   * Analisis file (upload) menggunakan Laravel API
   */
  static async analyzeFile(file: File): Promise<AnalysisResult> {
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch(`${API_BASE_URL}/api/analyze`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    return await response.json()
  }

  /**
   * Health check Laravel backend menggunakan parameter khusus
   */
  static async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/health`, {
        method: 'GET',
      })
      if (response.ok) {
        const data = await response.json()
        return data.status === 'ok'
      }
      return false
    } catch {
      return false
    }
  }
}

export default ApiService

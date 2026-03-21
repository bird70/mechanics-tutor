// @vitest-environment node
import { afterEach, describe, expect, it, vi } from 'vitest'

describe('vite config', () => {
  afterEach(() => {
    delete process.env.VITE_BASE_PATH
    vi.resetModules()
  })

  it('uses VITE_BASE_PATH when provided', async () => {
    process.env.VITE_BASE_PATH = '/mechanics-tutor/'
    vi.resetModules()
    const { default: config } = await import('../../vite.config')
    expect(config.base).toBe('/mechanics-tutor/')
  })

  it('falls back to root when VITE_BASE_PATH is not set', async () => {
    vi.resetModules()
    const { default: config } = await import('../../vite.config')
    expect(config.base).toBe('/')
  })
})

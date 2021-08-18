/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import PageHeader from '../components/page-header'

describe('App', () => {
  it('test page header', () => {
    function onSearchChange () {
      
    }
    function onClickSearch () {}
    const { getByDisplayValue } = render(<PageHeader search="搜索内容" onSearchChange={onSearchChange} onClickSearch={onClickSearch}/>)
    const input = getByDisplayValue('搜索内容')
    expect(input).toBeInTheDocument()
  })
  it('test navigator', () => {
    function onSearchChange () {
      
    }
    function onClickSearch () {}
    const { getByRole } = render(<PageHeader search="搜索内容" onSearchChange={onSearchChange} onClickSearch={onClickSearch}/>)

    const nav = getByRole('nav')
    expect(nav).toBeInTheDocument()
  })
})

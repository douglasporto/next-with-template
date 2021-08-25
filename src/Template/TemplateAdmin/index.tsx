import { ReactNode } from 'react'
import * as S from './styles'

type TemplateAdminProps = {
  children: ReactNode
}
export default function TemplateAdmin({ ...props }: TemplateAdminProps) {
  return (
    <>
      <header>Header da dashboard</header>
      <aside>Menu</aside>
      <S.Wrapper>
        <h1>TemplateAdmin</h1>
        {props.children}
      </S.Wrapper>
      <footer>Footer da dashboard</footer>
    </>
  )
}

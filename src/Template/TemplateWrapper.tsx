import { AppProps } from 'next/dist/next-server/lib/router/router'
import TemplateAdmin from './TemplateAdmin'
import TemplateAuth from './TemplateAuth'

type TemplateWrapperProps = AppProps & {
  layout: 'auth' | 'admin'
}

export default function TemplateWrapper({
  layout,
  ...props
}: TemplateWrapperProps) {
  switch (layout) {
    case 'admin':
      return <TemplateAdmin>{props.children}</TemplateAdmin>
      break
    case 'auth':
      return <TemplateAuth>{props.children}</TemplateAuth>
      break
    default:
      return <div>default{props.children}</div>
      break
  }
}

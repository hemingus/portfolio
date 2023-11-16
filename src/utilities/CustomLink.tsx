import { ReactNode } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export function CustomLink({ to, children, ...props }: {to: string, children: ReactNode}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
}
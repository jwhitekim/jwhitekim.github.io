import type { ReactNode } from 'react'

interface Props {
  image?: string
  imageHover?: string
  highlight?: boolean
  children: ReactNode
}

// Jon Barron 식 항목: 160px 썸네일(있을 때만) | 본문. hover 시 두 번째 이미지로 전환
export default function Entry({ image, imageHover, highlight, children }: Props) {
  const classes = ['entry', image && 'has-thumb', highlight && 'highlight'].filter(Boolean).join(' ')

  return (
    <li className={classes}>
      {image && (
        <div className="thumb">
          <img src={image} alt="" loading="lazy" />
          {imageHover && <img className="thumb-hover" src={imageHover} alt="" loading="lazy" />}
        </div>
      )}
      <div>{children}</div>
    </li>
  )
}

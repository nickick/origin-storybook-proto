import { Typography } from "../Typography"

export interface AltCardProps {
  /**
   * String at the top of the text portion of the card
   */
  title: string
  /**
   * String used as body/subtitle below title
   */
  body?: string
  /**
   * Src for image at top of card
   */
  imgSrc: string
  /**
   * Src for alt at top of card
   */
  imgAlt: string
  /**
   * Toggle smaller font
   */
  narrow: boolean
  /**
   * Src for image in thumbnail at top of card, only for narrow cards
   */
  thumbnailSrc?: string
  /**
  * Alt for image in thumbnail at top of card, only for narrow cards
  */
  thumbnailAlt?: string
}

export const AltCard = ({
  body,
  imgSrc,
  imgAlt,
  title,
  narrow,
  thumbnailSrc,
  thumbnailAlt,
}: AltCardProps) => (
  <div className='bg-gray-100 p-6 rounded-xl w-full shadow overflow-hidden text-black'>
    <div className='relative float-left mb-3'>
      <img src={imgSrc} alt={imgAlt} className="h-10" />
      { thumbnailSrc && (
        <div className='absolute left-4 bottom-1 transform translate-x-1/2 translate-y-1/2 overflow-hidden rounded-full border-2 border-white'>
          <img src={thumbnailSrc} alt={thumbnailAlt} className="w-5 h-5 object-cover" />
        </div>
      )}
    </div>
    <div className="clear-both">
      <div className="text-blue-500">
        <Typography.Caption2>
          {title}
        </Typography.Caption2>
      </div>
      {narrow ? (
        <Typography.Title2 classes={''}>
          {body}
        </Typography.Title2>
        ) : (
        <Typography.Title classes={''}>
          {body}
        </Typography.Title>
      )}
    </div>
  </div>
)

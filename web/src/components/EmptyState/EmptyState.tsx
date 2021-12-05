import {
  Heading,
  Paragraph,
  Button,
} from '@buildcities/build-ui.components.all'

type TEmptyStateProps = {
  title: string
  description?: string
  onClick?: () => void
  ctaName?: string
}

const EmptyState: React.FC<TEmptyStateProps> = ({
  children,
  title,
  description,
  ctaName,
}) => {
  return (
    <div className="flex flex-col h-full   items-center">
      <div className="max-w-md flex-1 justify-center  flex flex-col items-center">
        <Heading type="H3" className="text-mainText" text={title} />
        <Paragraph
          className="mb-6 text-mainText text-center"
          text={description}
        />

        {children}
        <div className="mt-6 w-full">
          <Button text={ctaName} />
        </div>
      </div>
    </div>
  )
}

export default EmptyState

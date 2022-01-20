import moment from 'moment'
import TableActionButtonGroup from './components/table-action-buttons'
import { navigate, routes } from '@redwoodjs/router'
const DATE_FORMAT = 'DD/MM/YYYY'
import ListItemApproved from './components/list-item-approved'

export type ReservationListItemProps = {
  id?: string
  address?: string
  status?: 'NEW' | 'APPROVED' | 'REJECTED'
  checkInDate?: string
  checkOutDate?: string
  discordName?: string
  avatar?: string
  type?: string
  hideOverlay?: boolean
}

const ReservationListItem = (props: ReservationListItemProps) => {
  const {
    id,
    address,
    checkInDate,
    checkOutDate,
    status,
    discordName,
    avatar,
    type,
  } = props
  const onClick = () => {
    navigate(routes.confirmReservation({ id }))
  }

  return type === 'unapproved' ? (
    <tr className="flex items-center justify-between xl:flex-nowrap flex-wrap bg-cardBackground rounded-xl mb-4 px-6 py-4">
      <td className="xl:w-1/5 sm:w-1/3 w-full">
        <div
          aria-hidden
          onClick={onClick}
          className="flex cursor-pointer  items-center  sm:justify-start lg:mb-0 mb-4 justify-center w-full"
        >
          <img
            src={avatar}
            alt={`${address}'s avatar`}
            className="w-16 h-16 border border-mainText rounded-full"
          />
          <div className="flex flex-col items-start ml-4">
            <span className="truncate w-48">{address}</span>
            {discordName.length > 0 && <span>{discordName}</span>}
          </div>
        </div>
      </td>
      <td className="flex relative md:justify-center justify-end xl:w-1/5 sm:w-1/3 lg:mb-0 sm:pr-0 pr-4 mb-4 w-1/2">
        {moment(checkInDate).format(DATE_FORMAT)}
        <span className="sm:hidden block absolute -right-2">to</span>
      </td>
      <td className="flex md:justify-center sm:justify-end justify-start xl:w-1/5 sm:w-1/3 lg:mb-0 sm:pl-0 pl-4 mb-4 w-1/2">
        {moment(checkOutDate).format(DATE_FORMAT)}
      </td>
      <TableActionButtonGroup status={status} id={id} />
    </tr>
  ) : (
    <ListItemApproved {...props} />
  )
}

export default ReservationListItem

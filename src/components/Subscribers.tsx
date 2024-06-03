import { PencilSquareIcon, TrashIcon } from '../ui/icons';
import { subscribers } from '../utils/placeholder-data';

export default function Subscribers() {
  return (
    <div className=''>
      <h1 className='text-2xl font-bold mb-8'>Subscribers</h1>
      <section className='flex gap-8 flex-wrap overflow-y-auto'>
        {subscribers.map((subscriber) => (
          <SubcriberCard key={subscriber.id} subscriber={subscriber} />
        ))}
      </section>
    </div>
  );
}

type Subscriber = {
  id: number;
  fullName: string;
  email: string;
  subscribedDate: string;
};

function SubcriberCard({ subscriber }: { subscriber: Subscriber }) {
  return (
    <div className='bg-gray-100 p-4 min-w-60 max-w-72 rounded-md shadow'>
      <div className='flex justify-between items-start'>
        <span className='inline-flex justify-center items-center size-16 rounded-full bg-gray-300 p-4 text-xl font-bold mb-2'>
          {subscriber.fullName
            .split(' ')
            .map((name: string) => name[0])
            .join('')
            .toUpperCase()}
        </span>
        <div className='flex gap-4'>
          <button className='text-gray-600 hover:text-black'>
            <PencilSquareIcon className='size-5' />
          </button>
          <button className='text-gray-600 hover:text-red-600'>
            <TrashIcon className='size-5' />
          </button>
        </div>
      </div>

      <h2 className='font-bold mb-2'>{subscriber.fullName}</h2>
      <p className='text-gray-600'>{subscriber.email}</p>
      <p className='text-gray-600'>{subscriber.subscribedDate}</p>
    </div>
  );
}

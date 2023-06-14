import fetcher from '@/lib/fetcher';
import useSWR from 'swr'

export const useGetProducts = () => {

    const { data, isLoading, error } = useSWR('/api/products', fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {
        data,
        isLoading,
        error
    }


}
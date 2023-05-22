import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>
/**
 * Deprecated, use redesigned compoents
 * @deprecated
 */
export const HStack = (props: HStackProps) => {
    return (
        <Flex direction='row' {...props}/>
    );
}
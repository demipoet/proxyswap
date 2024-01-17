import { Path, Svg } from 'react-native-svg'

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon'

export const [ArrowDownCircle, AnimatedArrowDownCircle] = createIcon({
  name: 'ArrowDownCircle',
  getIcon: (props) => (
    <Svg fill="none" viewBox="0 0 25 26" {...props}>
      <Path
        clipRule="evenodd"
        d="M0 13C0 6.09625 5.59625 0.499999 12.5 0.499999C19.4037 0.499999 25 6.09625 25 13C25 19.9037 19.4037 25.5 12.5 25.5C5.59625 25.5 0 19.9037 0 13ZM13.25 7.75C13.25 7.33579 12.9142 7 12.5 7C12.0858 7 11.75 7.33579 11.75 7.75V15.4737C11.75 15.8846 11.75 16.0901 11.6265 16.1413C11.5031 16.1924 11.3578 16.0471 11.0672 15.7565L7.78033 12.4697C7.48744 12.1768 7.01256 12.1768 6.71967 12.4697C6.42678 12.7626 6.42678 13.2374 6.71967 13.5303L11.9697 18.7803C12.2626 19.0732 12.7374 19.0732 13.0303 18.7803L18.2803 13.5303C18.5732 13.2374 18.5732 12.7626 18.2803 12.4697C17.9874 12.1768 17.5126 12.1768 17.2197 12.4697L13.9328 15.7565C13.6422 16.0471 13.4969 16.1924 13.3735 16.1413C13.25 16.0901 13.25 15.8846 13.25 15.4737V7.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </Svg>
  ),
})

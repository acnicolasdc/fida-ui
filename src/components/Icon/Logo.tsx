import { SVGProps } from 'react'

export default function Logo(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={204}
            height={33}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m14.167 10.5 3.728 7.5h-7.457l3.729-7.5ZM8.202 9a2.243 2.243 0 0 1 2.237 2.25 2.243 2.243 0 0 1-2.237 2.25 2.243 2.243 0 0 1-2.237-2.25A2.243 2.243 0 0 1 8.202 9Zm13.42 0a2.243 2.243 0 0 1 2.237 2.25 2.243 2.243 0 0 1-2.237 2.25 2.243 2.243 0 0 1-2.236-2.25A2.243 2.243 0 0 1 21.622 9ZM10.41 5.706A1.5 1.5 0 0 1 9.24 7.47l-7.456 1.5A1.492 1.492 0 0 1 .029 7.794 1.5 1.5 0 0 1 1.2 6.03l7.456-1.5a1.492 1.492 0 0 1 1.755 1.177ZM26.842 4.5c.823 0 1.49.672 1.49 1.5s-.667 1.5-1.49 1.5h-8.947A1.496 1.496 0 0 1 16.402 6c0-.828.668-1.5 1.492-1.5h8.947ZM19.14 25.52c1.742-.292 2.784-1.546 3.113-4.07l-7.9 1.987c1.413 1.74 2.98 2.386 4.787 2.083Zm-7.573-4.475 11.93-3A1.493 1.493 0 0 1 25.35 19.5c0 5.155-1.899 8.339-5.72 8.98-3.662.614-6.721-1.233-8.995-5.236a1.502 1.502 0 0 1 .933-2.2ZM5.965 3a2.991 2.991 0 0 0-2.982 3v21c0 1.657 1.335 3 2.982 3h20.877a2.991 2.991 0 0 0 2.982-3V6c0-1.657-1.335-3-2.982-3H5.965Zm0-3h20.877c3.294 0 5.964 2.686 5.964 6v21c0 3.314-2.67 6-5.964 6H5.965C2.67 33 0 30.314 0 27V6c0-3.314 2.67-6 5.965-6ZM40.829 31.429V4.432h18.106v3.186H44.38v8.36h12.596v3.186H44.38V31.43H40.83ZM63.163 8.244V4.432h3.296v3.812h-3.296Zm0 23.185V11.872h3.296v19.557h-3.296ZM84.107 31.429V28.96c-1.233 1.94-3.045 2.91-5.437 2.91-1.55 0-2.978-.43-4.284-1.29-1.294-.859-2.3-2.056-3.02-3.59-.709-1.547-1.063-3.321-1.063-5.322 0-1.953.324-3.72.97-5.304.647-1.596 1.618-2.818 2.911-3.665 1.294-.847 2.74-1.27 4.34-1.27 1.17 0 2.214.251 3.13.755a6.468 6.468 0 0 1 2.233 1.933V4.432h3.277v26.997h-3.057Zm-10.417-9.76c0 2.504.525 4.376 1.575 5.616 1.05 1.24 2.288 1.86 3.716 1.86 1.44 0 2.66-.59 3.661-1.768 1.013-1.19 1.52-3.001 1.52-5.432 0-2.677-.513-4.64-1.538-5.893-1.025-1.252-2.288-1.878-3.79-1.878-1.464 0-2.69.601-3.68 1.804-.976 1.203-1.464 3.1-1.464 5.69ZM105.05 29.016c-1.22 1.044-2.398 1.78-3.533 2.21-1.123.43-2.331.645-3.625.645-2.136 0-3.777-.522-4.924-1.566-1.148-1.056-1.721-2.4-1.721-4.033 0-.957.213-1.829.64-2.615.44-.798 1.007-1.436 1.703-1.915a8.108 8.108 0 0 1 2.38-1.086c.647-.172 1.623-.338 2.929-.497 2.661-.32 4.619-.7 5.877-1.142.012-.454.018-.743.018-.866 0-1.35-.311-2.302-.934-2.854-.842-.749-2.093-1.123-3.753-1.123-1.55 0-2.697.276-3.442.828-.732.54-1.275 1.504-1.629 2.891l-3.222-.442c.293-1.387.775-2.504 1.446-3.351.672-.86 1.642-1.516 2.911-1.97 1.27-.467 2.74-.7 4.412-.7 1.66 0 3.009.196 4.046.589 1.038.393 1.8.89 2.288 1.492.489.589.83 1.338 1.026 2.246.11.565.164 1.584.164 3.057v4.42c0 3.081.068 5.033.202 5.856.146.81.427 1.59.842 2.339h-3.442c-.342-.688-.561-1.492-.659-2.413Zm-.274-7.403c-1.197.491-2.991.909-5.383 1.253-1.354.196-2.313.417-2.874.663-.561.245-.995.607-1.3 1.086a2.797 2.797 0 0 0-.457 1.565c0 .884.33 1.62.988 2.21.671.59 1.648.884 2.93.884 1.269 0 2.398-.276 3.386-.829.989-.564 1.715-1.332 2.179-2.302.354-.748.531-1.853.531-3.314v-1.216ZM116.272 31.429h-3.057V4.432h3.295v9.631c1.392-1.756 3.168-2.633 5.328-2.633 1.196 0 2.325.245 3.387.736 1.074.48 1.952 1.16 2.636 2.044.695.872 1.239 1.928 1.629 3.168.391 1.24.586 2.566.586 3.977 0 3.352-.824 5.942-2.471 7.772-1.648 1.829-3.625 2.744-5.932 2.744-2.294 0-4.095-.964-5.401-2.892v2.45Zm-.036-9.926c0 2.345.317 4.039.952 5.082 1.037 1.707 2.441 2.56 4.21 2.56 1.441 0 2.685-.626 3.735-1.878 1.05-1.265 1.574-3.143 1.574-5.635 0-2.554-.506-4.438-1.519-5.654-1.001-1.215-2.215-1.823-3.643-1.823-1.44 0-2.685.632-3.735 1.897-1.049 1.252-1.574 3.07-1.574 5.45ZM132.877 21.65c0-3.621 1.001-6.304 3.002-8.047 1.672-1.449 3.711-2.173 6.115-2.173 2.673 0 4.857.884 6.554 2.652 1.696 1.755 2.545 4.186 2.545 7.292 0 2.517-.379 4.5-1.136 5.948-.744 1.436-1.836 2.554-3.277 3.352-1.427.797-2.99 1.197-4.686 1.197-2.722 0-4.925-.878-6.609-2.634-1.672-1.755-2.508-4.284-2.508-7.587Zm3.387 0c0 2.505.543 4.383 1.629 5.635 1.086 1.24 2.453 1.86 4.101 1.86 1.635 0 2.996-.626 4.082-1.878 1.087-1.252 1.63-3.162 1.63-5.727 0-2.419-.55-4.248-1.648-5.488-1.086-1.252-2.441-1.878-4.064-1.878-1.648 0-3.015.62-4.101 1.86-1.086 1.24-1.629 3.112-1.629 5.616ZM167.66 29.016c-1.22 1.044-2.398 1.78-3.533 2.21-1.123.43-2.331.645-3.625.645-2.135 0-3.777-.522-4.924-1.566-1.148-1.056-1.721-2.4-1.721-4.033 0-.957.213-1.829.641-2.615.439-.798 1.007-1.436 1.702-1.915a8.106 8.106 0 0 1 2.38-1.086c.647-.172 1.623-.338 2.929-.497 2.661-.32 4.62-.7 5.877-1.142.012-.454.018-.743.018-.866 0-1.35-.311-2.302-.934-2.854-.842-.749-2.093-1.123-3.752-1.123-1.55 0-2.698.276-3.442.828-.733.54-1.276 1.504-1.63 2.891l-3.222-.442c.293-1.387.775-2.504 1.447-3.351.671-.86 1.641-1.516 2.91-1.97 1.27-.467 2.74-.7 4.412-.7 1.66 0 3.009.196 4.046.589 1.038.393 1.801.89 2.289 1.492.488.589.83 1.338 1.025 2.246.11.565.165 1.584.165 3.057v4.42c0 3.081.067 5.033.201 5.856.147.81.427 1.59.842 2.339h-3.442c-.341-.688-.561-1.492-.659-2.413Zm-.274-7.403c-1.196.491-2.99.909-5.382 1.253-1.355.196-2.313.417-2.875.663-.561.245-.994.607-1.299 1.086a2.79 2.79 0 0 0-.458 1.565c0 .884.329 1.62.988 2.21.672.59 1.648.884 2.93.884 1.269 0 2.398-.276 3.386-.829.989-.564 1.715-1.332 2.179-2.302.354-.748.531-1.853.531-3.314v-1.216ZM175.807 31.429V11.872h2.966v2.964c.757-1.387 1.452-2.301 2.087-2.743a3.687 3.687 0 0 1 2.123-.663c1.111 0 2.24.356 3.387 1.068l-1.135 3.075c-.805-.479-1.611-.718-2.416-.718a3.1 3.1 0 0 0-1.941.663c-.573.43-.982 1.031-1.226 1.805-.367 1.178-.55 2.467-.55 3.867v10.239h-3.295ZM200.943 31.429V28.96c-1.233 1.94-3.045 2.91-5.437 2.91-1.55 0-2.978-.43-4.284-1.29-1.294-.859-2.301-2.056-3.021-3.59-.708-1.547-1.062-3.321-1.062-5.322 0-1.953.324-3.72.97-5.304.647-1.596 1.618-2.818 2.911-3.665 1.294-.847 2.74-1.27 4.339-1.27 1.172 0 2.215.251 3.131.755a6.473 6.473 0 0 1 2.233 1.933V4.432H204v26.997h-3.057Zm-10.417-9.76c0 2.504.525 4.376 1.574 5.616 1.05 1.24 2.289 1.86 3.717 1.86 1.44 0 2.66-.59 3.661-1.768 1.013-1.19 1.52-3.001 1.52-5.432 0-2.677-.513-4.64-1.538-5.893-1.025-1.252-2.289-1.878-3.79-1.878-1.464 0-2.691.601-3.679 1.804-.977 1.203-1.465 3.1-1.465 5.69Z"
                fill="#3D4959"
            />
        </svg>
    )
}

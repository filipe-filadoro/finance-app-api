export const ok = (body) => ({
    statusCode: 200,
    body,
})

export const created = (body) => ({
    statusCode: 201,
    body,
})

export const badRequest = (errorMessage) => ({
    statusCode: 400,
    body: {
        message: errorMessage,
    },
})

export const serverError = () => ({
    statusCode: 500,
    body: {
        message: 'Internal server error',
    },
})

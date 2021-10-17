import * as lov_service from "./lov.service"

import * as index from "./enum/index"
// @ponicode
describe("findAllByType", () => {
    let inst: any

    beforeEach(() => {
        inst = new lov_service.LovService(undefined)
    })

    test("0", async () => {
        await inst.findAllByType(index.LovType.TASK_TYPE)
    })

    test("1", async () => {
        await inst.findAllByType(index.LovType.TASK_PRIORITY)
    })
})

// @ponicode
describe("findById", () => {
    let inst: any

    beforeEach(() => {
        inst = new lov_service.LovService(undefined)
    })

    test("0", async () => {
        await inst.findById(12)
    })

    test("1", async () => {
        await inst.findById(12345)
    })

    test("2", async () => {
        await inst.findById("bc23a9d531064583ace8f67dad60f6bb")
    })

    test("3", async () => {
        await inst.findById(56784)
    })

    test("4", async () => {
        await inst.findById(987650)
    })

    test("5", async () => {
        await inst.findById(-Infinity)
    })
})

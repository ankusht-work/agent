
// Basic Verilog module example

module basic_example(
    input wire clk,        // Clock input
    input wire reset_n,    // Active-low reset
    input wire [7:0] data_in,  // 8-bit input data
    output reg [7:0] data_out  // 8-bit output data
);

    // Internal register
    reg [7:0] internal_reg;

    // Sequential logic
    always @(posedge clk or negedge reset_n) begin
        if (!reset_n) begin
            // Reset condition
            internal_reg <= 8'b0;
            data_out <= 8'b0;
        end else begin
            // Normal operation
            internal_reg <= data_in;
            data_out <= internal_reg;
        end
    end

endmodule
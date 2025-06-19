
module home_page (
    input wire clk,
    input wire reset_n,
    
    // Header inputs
    input wire [7:0] site_title,
    input wire [7:0] nav_about,
    input wire [7:0] nav_features,
    input wire [7:0] nav_contact,
    
    // Hero section inputs
    input wire [31:0] hero_message,
    input wire [15:0] cta_button_text,
    
    // About section inputs
    input wire [63:0] about_content,
    
    // Features section inputs
    input wire [31:0] feature1,
    input wire [31:0] feature2,
    input wire [31:0] feature3,
    
    // Contact form inputs
    input wire [7:0] name_field,
    input wire [7:0] email_field,
    input wire [15:0] message_field,
    input wire submit_button,
    
    // Footer input
    input wire [31:0] copyright_text,
    
    // Outputs
    output reg [7:0] display_output
);

    // State definitions
    localparam HEADER = 3'd0;
    localparam HERO = 3'd1;
    localparam ABOUT = 3'd2;
    localparam FEATURES = 3'd3;
    localparam CONTACT = 3'd4;
    localparam FOOTER = 3'd5;

    reg [2:0] current_state;
    reg [2:0] next_state;

    // State machine
    always @(posedge clk or negedge reset_n) begin
        if (!reset_n) begin
            current_state <= HEADER;
        end else begin
            current_state <= next_state;
        end
    end

    // Next state logic
    always @(*) begin
        case (current_state)
            HEADER: next_state = HERO;
            HERO: next_state = ABOUT;
            ABOUT: next_state = FEATURES;
            FEATURES: next_state = CONTACT;
            CONTACT: next_state = FOOTER;
            FOOTER: next_state = HEADER;
            default: next_state = HEADER;
        endcase
    end

    // Output logic
    always @(posedge clk) begin
        case (current_state)
            HEADER: display_output <= site_title;
            HERO: display_output <= hero_message[7:0];
            ABOUT: display_output <= about_content[7:0];
            FEATURES: display_output <= feature1[7:0];
            CONTACT: display_output <= name_field;
            FOOTER: display_output <= copyright_text[7:0];
            default: display_output <= 8'h00;
        endcase
    end

endmo